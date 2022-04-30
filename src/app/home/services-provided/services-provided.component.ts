import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-provided',
  templateUrl: './services-provided.component.html',
  styleUrls: ['./services-provided.component.scss']
})
export class ServicesProvidedComponent implements OnInit {

  services = [
    {name: 'Web Development', description: 'I build websites and web applications using the latest technologies and frameworks.'},
    {name: 'Mobile Development', description: 'I build mobile applications using the latest technologies and frameworks.'},
    {name: 'Blockchain', description: 'I build decentralized applications using the latest technologies and frameworks.'},
    {name: 'Cloud Computing', description: 'I build cloud applications using the latest technologies and frameworks.'},
    {name: 'Data Analytics',  description: 'I build data analytics applications using the latest technologies and frameworks.'},
    {name: 'Data Visualization', description: 'I build data visualization applications using the latest technologies and frameworks.'},
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
