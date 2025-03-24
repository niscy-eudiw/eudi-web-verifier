import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WalletLayoutComponent } from '@app/core/layout/wallet-layout/wallet-layout.component';
import { SharedModule } from '@app/shared/shared.module';
import { AttestationSelection, AttributeSelectionMethod } from '../models/AttestationSelection';
import { TransactionInitializationRequest } from '@app/core/models/TransactionInitializationRequest';
import { AttestationFormat } from '@app/core/models/attestation/AttestationFormat';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WalletLayoutComponent,
        RouterModule,
        SharedModule,
        HomeComponent
      ],
      providers: [
        provideHttpClient(),
        provideRouter([]),
        provideAnimations()
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle jar method change and update initializationRequest', () => {
    const mockSelectedAttestations = [{ format: AttestationFormat.MSO_MDOC, attributeSelectionMethod: AttributeSelectionMethod.ALL_ATTRIBUTES }] as AttestationSelection[];
    const mockSelectedAttributes = { mockId: ['mockValue'] };
    const mockSelectedJarMethod = 'post';
    const mockInitializationRequest = {} as TransactionInitializationRequest;
  
    component.selectedAttestations = mockSelectedAttestations;
    component.selectedAttributes = mockSelectedAttributes;
    spyOn(component as any, 'prepareInitializationRequest').and.returnValue(mockInitializationRequest);
  
    component.handleJarMethodChangedEvent(mockSelectedJarMethod);
  
    expect(component.selectedJarMethod).toBe(mockSelectedJarMethod);
    expect(component.initializationRequest).toBe(mockInitializationRequest);
  });

  /*
  
  it('should handle jar method change and set initializationRequest to null if conditions are not met', () => {
    component.selectedAttestations = null;
    component.selectedAttributes = null;
  
    component.handleJarMethodChangedEvent('post');
  
    expect(component.initializationRequest).toBeNull();
  });
  
  it('should prepare initialization request for "dcql" presentation type', () => {
    const mockSelectedAttestations = [{ format: 'mockFormat', attributeSelectionMethod: 'mockMethod' }] as AttestationSelection[];
    const mockSelectedAttributes = { mockId: ['mockValue'] };
    const mockSelectedJarMethod = 'get';
    const mockInitializationRequest = {} as TransactionInitializationRequest;
  
    spyOn(component['dcqlService'], 'dcqlPresentationRequest').and.returnValue(mockInitializationRequest);
  
    const result = (component as any).prepareInitializationRequest(
      'dcql',
      mockSelectedAttestations,
      mockSelectedAttributes,
      mockSelectedJarMethod
    );
  
    expect(result).toBe(mockInitializationRequest);
    expect(component['dcqlService'].dcqlPresentationRequest).toHaveBeenCalledWith(
      mockSelectedAttestations,
      mockSelectedAttributes,
      mockSelectedJarMethod
    );
  });
  
  it('should prepare initialization request for "prex" presentation type', () => {
    const mockSelectedAttestations = [{ format: 'mockFormat', attributeSelectionMethod: 'mockMethod' }] as AttestationSelection[];
    const mockSelectedAttributes = { mockId: ['mockValue'] };
    const mockSelectedJarMethod = 'post';
    const mockInitializationRequest = {} as TransactionInitializationRequest;
  
    spyOn(component['presentationDefinitionService'], 'presentationDefinitionRequest').and.returnValue(mockInitializationRequest);
  
    const result = (component as any).prepareInitializationRequest(
      'prex',
      mockSelectedAttestations,
      mockSelectedAttributes,
      mockSelectedJarMethod
    );
  
    expect(result).toBe(mockInitializationRequest);
    expect(component['presentationDefinitionService'].presentationDefinitionRequest).toHaveBeenCalledWith(
      mockSelectedAttestations,
      mockSelectedAttributes,
      component.vpFormatsPerType,
      mockSelectedJarMethod
    );
  });
  
  it('should proceed to invoke wallet if initializationRequest is not null', () => {
    const mockInitializationRequest = {} as TransactionInitializationRequest;
    component.initializationRequest = mockInitializationRequest;
  
    spyOn(component['verifierEndpointService'], 'initializeTransaction').and.callFake((_, callback) => callback());
    spyOn(component['navigateService'], 'navigateTo');
  
    component.proceedToInvokeWallet();
  
    expect(component['verifierEndpointService'].initializeTransaction).toHaveBeenCalledWith(
      mockInitializationRequest,
      jasmine.any(Function)
    );
    expect(component['navigateService'].navigateTo).toHaveBeenCalledWith('invoke-wallet');
  });
  
  it('should alert if initializationRequest is null when proceeding to invoke wallet', () => {
    component.initializationRequest = null;
  
    spyOn(window, 'alert');
  
    component.proceedToInvokeWallet();
  
    expect(window.alert).toHaveBeenCalledWith('nothing to submit');
  });
  
  it('should return true if attestations are selected', () => {
    component.selectedAttestations = [
      { format: 'mockFormat', attributeSelectionMethod: 'mockMethod' },
    ] as AttestationSelection[];
  
    const result = component.attestationsSelected();
  
    expect(result).toBeTrue();
  });
  
  it('should return false if no attestations are selected', () => {
    component.selectedAttestations = null;
  
    const result = component.attestationsSelected();
  
    expect(result).toBeFalse();
  });
  
  it('should return true if attributes are selected', () => {
    component.selectedAttestations = [
      { type: 'mockType', attributeSelectionMethod: AttributeSelectionMethod.SELECTABLE },
    ] as AttestationSelection[];
    component.selectedAttributes = { mockType: ['mockValue'] };
  
    const result = component.attributesSelected();
  
    expect(result).toBeTrue();
  });
  
  it('should return false if attributes are not selected', () => {
    component.selectedAttestations = [
      { type: 'mockType', attributeSelectionMethod: AttributeSelectionMethod.SELECTABLE },
    ] as AttestationSelection[];
    component.selectedAttributes = null;
  
    const result = component.attributesSelected();
  
    expect(result).toBeFalse();
  });
  
  it('should return true if initializationRequest is not null in canProceed', () => {
    component.initializationRequest = {} as TransactionInitializationRequest;
  
    const result = component.canProceed();
  
    expect(result).toBeTrue();
  });
  
  it('should return false if initializationRequest is null in canProceed', () => {
    component.initializationRequest = null;
  
    const result = component.canProceed();
  
    expect(result).toBeFalse();
  });
  */
});
