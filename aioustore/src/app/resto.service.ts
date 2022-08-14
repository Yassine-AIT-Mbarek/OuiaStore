import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
@Injectable(
    {
        providedIn : 'root'
    }
)
export class restoservice {
    url="http://localhost:3000/posts"
constructor(private http:HttpClient) { }
getList(){
    return this.http.get(this.url);}
saveResto(data : any)
{
    return this.http.post(this.url,data)
console.warn("seveice",data)
}
deleteresto(id : any)
  {
    return this.http.delete(`${this.url}/${id}`);
  }
} 