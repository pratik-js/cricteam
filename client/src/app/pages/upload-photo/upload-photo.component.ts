import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class UploadPhotoComponent implements OnInit {
  name;
  title = 'Upload Photo';
  constructor(
    public dialogRef: MatDialogRef<UploadPhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private http: HttpClient,
    public snackBar: MatSnackBar
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

    const avatar = files[0];
    if (avatar.type.indexOf('image/') !== 0) {
      this.snackBar.open('Select valid file.');
      return;
    }
    if (avatar.size / (1024 * 1024) > 2) {
      this.snackBar.open('Image Size must be less than 2 MB.');
      return;
    }
    const fileName = this.data._id + '.' + avatar.name.split('.').pop();
    const fileNameMeta = this.data.for + '|s|' + fileName;

    const formData: FormData = new FormData();
    formData.append('avatar', avatar, fileNameMeta);

    formData.append(
      'saveMeta',
      JSON.stringify({ fileName, id: this.data._id, entityName: this.data.for })
    );
    this.http.post('/api/upload', formData).subscribe((res: any) => {
      if (res && res.done) {
        this.snackBar.open('Upload successfully.');
        this.dialogRef.close(true);
        return;
      }
      this.snackBar.open('Upload Error.');
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
