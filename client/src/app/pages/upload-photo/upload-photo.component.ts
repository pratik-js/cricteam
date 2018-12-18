import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class UploadPhotoComponent implements OnInit {
  name;
  title='Upload Photo'
  constructor(
    public dialogRef: MatDialogRef<UploadPhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private http: HttpClient
  ) {
    this.name = data.name;
  }

  ngOnInit() {}

  onSubmit() {
    const elemFile: any = document.getElementById('input-photo');
    const files = elemFile.files;
    if (!files && !files.length) {
      return;
    }
    // debugger;
    const formData: FormData = new FormData();
    formData.append('avatar', files[0], this.data._id);

    formData.append(
      'saveMeta',
      JSON.stringify({ folderName: this.name, fileName: this.data._id })
    );
    this.http.post('/api/upload', formData).subscribe(r => {
      console.log('got r', r);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
