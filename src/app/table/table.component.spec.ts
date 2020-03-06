import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { AppService } from '../app.service';
import { throwError, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let service: AppService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [HttpClientModule],
      providers: [AppService]
    })
    .compileComponents();
    service = TestBed.get(AppService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handlePrev method on prevClick', () => {
    component.currentPage = 1;
    component.pageSize = 3;
    component.totalPages = 6;
    component.data = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
    fixture.detectChanges();
    component.handlePrev();
    expect(component.displayData.length).toBe(3);
  });

  it('should call handleNext method on handleNext Click', () => {
    component.pageSize = 4;
    component.totalPages = 10;
    component.currentPage = 0;
    component.data = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
    component.handleNext();
    expect(component.displayData.length).toBe(4);
  });

  it('should execute method on submit click', () => {
    const tableServiceSpy = spyOn(service, 'submitRow').and.returnValue(of({}));
    component.submitRow({id: 2, status: 'read'});
    expect(tableServiceSpy).toHaveBeenCalled();
  });
  
  it('should throw error on submit click', () => {
    const tableServiceSpy = spyOn(service, 'submitRow').and.returnValue(throwError('error'));
    component.submitRow({id: 2, status: 'read'});
    expect(tableServiceSpy).toHaveBeenCalled();
  });

});
