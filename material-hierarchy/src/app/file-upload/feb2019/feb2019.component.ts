import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feb2019',
  templateUrl: './feb2019.component.html',
  styleUrls: ['./feb2019.component.scss']
})
export class Feb2019Component implements OnInit {
  csvFileData = null;

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  fileProgress(fileInput: any) { this.csvFileData = fileInput.target.files[0] as File; }

  uploadFile() { this.onSubmit(); }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.csvFileData);
    this.http.post('url/to/your/api', formData).subscribe(res => {
      console.log(res);
      alert('SUCCESS !!');
    });
  }
}
