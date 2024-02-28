class GDPR {

    constructor() {
        this.bindEvents();

        if(this.cookieStatus() !== 'accept') this.showGDPR();
    }

    bindEvents() {
        let buttonAccept = document.querySelector('.gdpr-consent__button--accept');
        buttonAccept.addEventListener('click', () => {
            this.cookieStatus('accept');
            this.hideGDPR();
        });
    }

    bindEvents() {
        let buttonAccept = document.querySelector('.gdpr-consent__button--reject');
        buttonAccept.addEventListener('click', () => {
            this.cookieStatus('reject');
            this.hideGDPR();
        });
    }

    resetContent(){
        const classes = [
            '.content-gdpr-accept',
            '.content-gdpr-reject',
            '.content-gdpr-not-chosen'];

        for(const c of classes){
            document.querySelector(c).classList.add('hide');
            document.querySelector(c).classList.remove('show');
        }
    }

    cookieStatus(status) {

        if (status) localStorage.setItem('gdpr-consent-choice', status);

//student uitwerking

        return localStorage.getItem('gdpr-consent-choice');
    }

    hideGDPR(){
        document.querySelector(`.gdpr-consent`).classList.add('hide');
        document.querySelector(`.gdpr-consent`).classList.remove('show');
    }

    showGDPR(){
        document.querySelector(`.gdpr-consent`).classList.add('show');
    }

}

const gdpr = new GDPR();

