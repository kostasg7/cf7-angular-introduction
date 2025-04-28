import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonTableComponent } from '../person-table/person-table.component';
import { ComponentInputExampleComponent } from './component-input-example.component';

describe('ComponentInputExampleComponent', () => {
  let component: ComponentInputExampleComponent;
  let fixture: ComponentFixture<ComponentInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentInputExampleComponent, PersonTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
