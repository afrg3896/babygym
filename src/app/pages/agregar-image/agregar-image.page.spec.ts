import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarImagePage } from './agregar-image.page';

describe('AgregarImagePage', () => {
  let component: AgregarImagePage;
  let fixture: ComponentFixture<AgregarImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
