import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for form handling
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-inventory',
  imports: [FormsModule],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css'
})
export class Inventory {
  httpClient = inject(HttpClient);
  inventoryData = {
    productId: 0,
    productName: '',  
    productQuantity: 0,
    recordPoints: 0 
  }

  onSubmit(): void {
    let apiurl = 'https://localhost:7191/api/Inventory'; // Replace with your API endpoint
    let httpOptions = {
      headers: 
      new HttpHeaders({
        Authorization: 'my-auth-token', 
        'Content-Type': 'application/json'  
      })
    }
    this.httpClient.post(apiurl, this.inventoryData,httpOptions).subscribe({
      next: (response) => {
        console.log('Response from API:', response);
        alert('Data submitted successfully!');
      }
      , error: (error) => {
        console.error('Error occurred:', error);
        alert('An error occurred while submitting data.');
      }
      });
    // Handle form submission logic here
    alert('Form submitted:'+ JSON.stringify(this.inventoryData));
  }
}
