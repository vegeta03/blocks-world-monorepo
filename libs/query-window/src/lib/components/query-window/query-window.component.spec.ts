import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QueryWindowComponent } from './query-window.component';

describe('QueryWindowComponent', () => {
  let component: QueryWindowComponent;
  let fixture: ComponentFixture<QueryWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryWindowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QueryWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
