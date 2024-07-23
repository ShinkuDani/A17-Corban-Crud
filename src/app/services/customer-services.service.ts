import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customerInterface } from '../Interfaces/customerInterface';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService {

  constructor(private http: HttpClient) { }

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2QxMzA2ZTAtZTUxZS00ODY2LWEzZmQtZjM4MjE3ZGQ1MmIyIiwic2Vzc2lvbl9pZCI6IjNkMDExNzkzLWY3MzItNGFmYi1iNjM4LTBhNzZhZTE2ZmQ1NyIsInNpZ25hbF9pZCI6ImVlY2Y0NDZmLWM1ZGEtNDAwMS1hYjE4LTIyMWZlODYzYjhmZiIsImhvc3QiOiJodHRwczovL2FwaTQuYWppbi5pby9pbmRleC5odG1sIiwiaXAiOiIxOTEuMTgzLjM4LjQyIiwibmJmIjoxNzIxMjY0NTcwLCJleHAiOjE3MjEzNTA5NzAsImlhdCI6MTcyMTI2NDU3MH0.vjtEEB6fQxwBvvaVn1GluPkoSRoJQfbYLLn2EaQK64M';

  headers0 = new HttpHeaders({
  
    'Authorization': 'Bearer ' + this.token,
    'accept': '*/*'
    
  })

  headers = new HttpHeaders()
  .set("Accept-Language", " pt-BR,pt;q=0.9")
  //.set("Connection", " keep-alive")
  .set("Authorization", "Bearer " + this.token)
  //.set("Referer", " https://api4.ajin.io/index.html")
  //.set("Sec-Fetch-Dest", " empty")
  //.set("Sec-Fetch-Mode", " cors")
  //.set("Sec-Fetch-Site", " same-origin")
  //.set("User-Agent", " Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36")
  .set("accept", " */*")
  //.set("sec-ch-ua", " \"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"")
  //.set("sec-ch-ua-mobile", " ?1")
  //.set("sec-ch-ua-platform", " \"Android\"")
  
  headers2 = new HttpHeaders()
  .set("Accept-Language", " pt-BR,pt;q=0.9")
  .set("Connection", " keep-alive")
  .set("Authorization", " Bearer " + this.token)
  .set("Referer", " https://api4.ajin.io/index.html")
  .set("Sec-Fetch-Dest", " empty")
  .set("Sec-Fetch-Mode", " cors")
  .set("Sec-Fetch-Site", " same-origin")
  .set("User-Agent", " Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36")
  .set("accept", " */*")
  .set("sec-ch-ua", " \"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"")
  .set("sec-ch-ua-mobile", " ?1")
  .set("sec-ch-ua-platform", " \"Android\"")
  
 headers3 = new HttpHeaders({
   'Accept-Language': 'pt-BR,pt;q=0.9',
   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2QxMzA2ZTAtZTUxZS00ODY2LWEzZmQtZjM4MjE3ZGQ1MmIyIiwic2Vzc2lvbl9pZCI6IjczM2ZmMGYzLTIzODktNDFiZC1iNzc5LWM2NDhmYTU3NTMxYSIsInNpZ25hbF9pZCI6ImVlY2Y0NDZmLWM1ZGEtNDAwMS1hYjE4LTIyMWZlODYzYjhmZiIsImhvc3QiOiJodHRwczovL2FwaTQuYWppbi5pby9pbmRleC5odG1sIiwiaXAiOiIxOTEuMTgzLjM4LjQyIiwibmJmIjoxNzIxMTgzNDI0LCJleHAiOjE3MjEyNjk4MjQsImlhdCI6MTcyMTE4MzQyNH0.IzH5UOVKxCZRILnrUKSTm1ca0y5CSuQmh2jpsBrGkqU',
   'Connection': 'keep-alive',
   'Referer': 'https://api4.ajin.io/index.html',
   'Sec-Fetch-Dest': 'empty',
   'Sec-Fetch-Mode': 'cors',
   'Sec-Fetch-Site': 'same-origin',
   'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
   'accept': '*/*',
   'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
   'sec-ch-ua-mobile': '?1',
   'sec-ch-ua-platform': "Android" 

 })

 

  //Teste com API de Graça Joke API
  getJoke(){
    return this.http.get('https://api.chucknorris.io/jokes/random')
  }

  //Teste com API de Graça Joke API
  getChuckNorrisJokesCategories(){
    return this.http.get('https://api.chucknorris.io/jokes/categories')
  }

  getToken(){
    return this.http.get('https://api4.ajin.io/v2/login', {
      
    })
  }

  //Pegando todos Customers
  getCustomers(){
    return this.http.get('https://api4.ajin.io/v2/customers') 
  }

  //Pegando um Customer
  getCustomer(id: number){
    return this.http.get(`https://api4.ajin.io/v2/customers/${id}`)

  }

  //Salvando Novo Customer
  postCustomer(){
    this.http.post(`https://api4.ajin.io/v2/customers`, {
      headers: this.headers
    })
      .subscribe( data => {
        console.log(`Cliente Cadastrado, Response: ${data}`)
      });
  }

  

  //Salvando Novo Customer
  putCustomer(id: number){
    this.http.get(`https://api4.ajin.io/v2/customers/${id}`, {
      headers: this.headers
    })
  }

  //Desletando customer
  deleteCustomer(id: number){
    this.http.delete(`https://api4.ajin.io/v2/customers/${id}`, {
      headers: this.headers
    })
      .subscribe( data => {
        console.log('Usuário Deletado.')
      });
  }
}
