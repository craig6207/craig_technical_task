import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { TaskBoxService } from '../../services/task-box.service';
import { TaskBoxComponent } from './task-box.component';

describe('TaskBoxComponent', () => {
  let component: TaskBoxComponent;
  let fixture: ComponentFixture<TaskBoxComponent>;
  let taskBoxServiceMock: any;
  let pageRoot: any;

  beforeEach(async () => {
    taskBoxServiceMock = {
      getData: jest.fn()
    }
    await TestBed.configureTestingModule({
      imports: [ FontAwesomeTestingModule ],
      declarations: [ TaskBoxComponent ],
      providers: [
        {
          provide: TaskBoxService, useValue: taskBoxServiceMock
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskBoxComponent);
    component = fixture.componentInstance;
    pageRoot = fixture.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should return getData from TaskBoxService', () => {
    const expectedResponse = [
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
    ];
    jest.spyOn(taskBoxServiceMock, 'getData').mockReturnValue(expectedResponse);
    fixture.detectChanges();
    expect(component.taskBoxData).toBe(expectedResponse);
  });

  it('should show correct header first box', () => {
    const testElement = pageRoot.querySelector('ng-test-header-0');
    expect(testElement.textContent).toContain('Upload data');
  });

  it('should show correct header 2nd box', () => {
    const testElement = pageRoot.querySelector('ng-test-header-1');
    expect(testElement.textContent).toContain('See my documents');
  });

  it('should show correct header 3rd box', () => {
    const testElement = pageRoot.querySelector('ng-test-header-2');
    expect(testElement.textContent).toContain('Whole fund funding update');
  });

  it('should show correct header 4th box', () => {
    const testElement = pageRoot.querySelector('ng-test-header-3');
    expect(testElement.textContent).toContain('Employer funding update');
  });

});
