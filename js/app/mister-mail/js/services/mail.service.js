
import { utilService } from './util-service.js'
import { storageService } from './async-storage-service.js'

const gMails = [
    {
        id: 1,
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    }
]
const MAILS_KEY = 'mail'

export const mailService = {
    query,
    getCurrencySymbol,
    getById,
    save,
    remove
}

function query() {
    return storageService.query(MAILS_KEY)
        .then(mails => {
            if (!mails.length) {
                mails = gMails;
                utilService.saveToStorage(MAILS_KEY, gMails);
            }
            return mails;
        });
}

function getById(id) {
    return storageService.get(MAILS_KEY, id)
}

function getCurrencySymbol({ listPrice }) {
    if (listPrice.currencyCode === 'USD') return '$';
    if (listPrice.currencyCode === 'EUR') return '€';
    if (listPrice.currencyCode === 'ILS') return '₪';
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAILS_KEY, mail);
    } else {
        return storageService.post(MAILS_KEY, mail);
    }
}

function remove(mailId) {
    return storageService.remove(MAILS_KEY, mailId);
}