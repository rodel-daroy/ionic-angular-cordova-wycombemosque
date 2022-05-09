import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeModalComponent } from './home-modal.component';

describe('HomeModalComponent', () => {
  let component: HomeModalComponent;
  let fixture: ComponentFixture<HomeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
