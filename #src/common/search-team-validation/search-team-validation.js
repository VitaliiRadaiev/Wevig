window.searchAdministratorFormValidationText = {
    required: 'Bitte füllen Sie dieses Feld aus',
    minValue: 'Min value should be 4 digits'
}

class InputObj {
    constructor(input, mask = null) {
        this.input = input;
        this.mask = mask;
        this.errorMessages = {
            required: this._createErrorMessageEl(window.searchAdministratorFormValidationText.required),
            minValue: this._createErrorMessageEl(window.searchAdministratorFormValidationText.minValue),
        }

        this.init();
        this._focus(); 
    }
    init() {
        if(this.mask) {
            Inputmask({
                regex: this.mask,
                showMaskOnHover: false,
                showMaskOnFocus: false,
                clearIncomplete: true,
                clearMaskOnLostFocus: true,
            }).mask(this.input);
        }
    }
    _createErrorMessageEl(text) {
        let errorMessage = document.createElement('div');
        errorMessage.className = 'wpcf7-not-valid-tip';
        errorMessage.innerText = text;
        return errorMessage;
    }

    _focus() {
        this.input.addEventListener('focus', () => {
            this.errorMessages.required.remove();
            this.errorMessages.minValue.remove();
            this.input.classList.remove('wpcf7-not-valid');
        })
    }

    checkRequired() {
        if (this.input.value.trim()) {
            this.errorMessages.required.remove();
            this.input.classList.remove('wpcf7-not-valid');
        } else {
            this.input.after(this.errorMessages.required);
            this.input.classList.add('wpcf7-not-valid');
        }
    }

    checkMinValue(length) {
        if(this.input.value.trim().length && this.input.value.trim().replace(/_/g, '').length < length) {
            this.input.after(this.errorMessages.minValue);
            this.input.classList.add('wpcf7-not-valid');
        }
    }
}

{

    let searchAdministratorForm = document.querySelector(".administrator-search form");
    if (searchAdministratorForm) {
        let searchBtn = searchAdministratorForm.querySelector('button.ajax-team');
        let plzInput = searchAdministratorForm.querySelector('input.plz-ajax');
        let strabeInput = searchAdministratorForm.querySelector('input.strabe-ajax');

        let inputs = [new InputObj(plzInput, String.raw`[0-9]{4}`), new InputObj(strabeInput, String.raw`[0-9ÄäÖöÜüß\.A-Za-z\s'/\-]*`)];

        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();

            inputs.forEach(inputObj => {
                inputObj.checkRequired();
            })

            inputs[0].checkMinValue(4);
        })
    }
}