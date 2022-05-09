import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminAreaPage } from './admin-area.page';

describe('AdminAreaPage', () => {
  let component: AdminAreaPage;
  let fixture: ComponentFixture<AdminAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
