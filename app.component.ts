import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TEST NG APP';
public selectedValue:any;


public host:any;
public port:any;
public dbschema:any;
public username:any;
public password:any;

public result:any;

dbinfo:any=[];
public submit:any

dbs = [
  { name: "MySQL", value: 1 },
  { name: "Oracle", value: 2 },
  { name: "Snowflake", value: 3 },
  { name: "Hive", value: 4 },
]

getValues(){

  // this.dbinfo=this.dbinfo.push(this.host);
  this.dbinfo = [this.host, this.port,this.dbschema,this.username,this.password];
  //console.log(this.dbinfo[0])


}
  


}
