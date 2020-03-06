import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getJsonData() {
    return this.http.get("./assets/sample_data.json");
  }

  submitRow(id, status) {
    const req = { id, status };
    return this.http.post("/api/submit", req, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

}
