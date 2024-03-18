import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageStorageService {

  constructor() { }

  saveImageToAssets(base64Image: string, uuid: string): void {
    // Create a blob from the base64 image data
    const blob = this.base64ToBlob(base64Image);

    // Create a file object from the blob
    const imageFile = new File([blob], `${uuid}.png`, { type: 'image/png' });

    // Save the file to the assets/images folder
    const imagePath = `./assets/images/${uuid}.png`;
    this.saveFile(imageFile, imagePath);
  }

  private base64ToBlob(base64Image: string): Blob {
    const byteString = atob(base64Image.split(',')[1]);
    const mimeString = base64Image.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: mimeString });
  }

  private saveFile(file: File, path: string): void {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const anchorElement = document.createElement('a');
      anchorElement.href = dataUrl;
      anchorElement.download = file.name;
      anchorElement.click();
      URL.revokeObjectURL(dataUrl);
    };
    reader.readAsDataURL(file);
  }
}
