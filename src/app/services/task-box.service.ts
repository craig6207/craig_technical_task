import { Injectable } from '@angular/core';
import { TaskBoxData } from '../interfaces/task-box-data';

@Injectable({
  providedIn: 'root'
})
export class TaskBoxService {

  constructor() { }

  getData(): TaskBoxData[] {
    return this.getMockData();
  }

  getMockData() {
    return [ 
        {
          header: 'Upload data',
          text: 'Submit member and cashflow data to Hymans Robertson via our single secure data submission portal with real-time data validation.',
          link: 'https://www.hymans.co.uk/contact/contact-us/',
          asset: 'assets/images/Upload_Data.png'
        },
        {
          header: 'See my documents',
          text: 'Access all your advice and documents from Hymans Robertson via our secure online storage facility.',
          link: 'https://www.hymans.co.uk/about-us/',
          asset: 'assets/images/See_my_documents.png'
        },
        {
          header: 'Whole fund funding update',
          text: 'Monitor and view latest whole fund funding position',
          link: 'https://www.hymans.co.uk/people-finder/',
          asset: 'assets/images/Whole_fund_update.png'
        },
        {
          header: 'Employer funding update',
          text: 'Calculate an updated funding level or indicative cessation valuation for any employer. View and download reports to share with your employers',
          link: 'https://www.hymans.co.uk/services/api-catalogue/',
          asset: 'assets/images/Employer_funding_update.png'
        }
    ] as TaskBoxData[]
  }
}
