import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RamadhanPage } from './ramadhan.page';

describe('RamadhanPage', () => {
  let component: RamadhanPage;
  let fixture: ComponentFixture<RamadhanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamadhanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RamadhanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
