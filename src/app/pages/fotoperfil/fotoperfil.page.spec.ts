import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FotoperfilPage } from './fotoperfil.page';

describe('FotoperfilPage', () => {
  let component: FotoperfilPage;
  let fixture: ComponentFixture<FotoperfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoperfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FotoperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
