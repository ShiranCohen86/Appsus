
import { utilService } from './util-service.js'
import { storageService } from './async-storage-service.js'

const MAILS_KEY = 'mail'
const myMails = [
    {
        id: 1,
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930591
    },
    {
        id: 2,
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930592
    },
    {
        id: 3,
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: true,
        sentAt: 1551133930593
    },
    {
        id: 3,
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: true,
        sentAt: 1551133930593
    },
    {
        id: 3,
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: true,
        sentAt: 1551133930593
    },
    {
        id: 3,
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: true,
        sentAt: 1551133930593
    },
    {
        id: 3,
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: true,
        sentAt: 1551133930593
    },
    {
        id: 3,
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: true,
        sentAt: 1551133930593
    },
    {
        id: 3,
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: true,
        sentAt: 1551133930593
    },
    {
        id: 3,
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: true,
        sentAt: 1551133930593
    },
    {
        id: 3,
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: true,
        sentAt: 1551133930593
    },
]

export const mailService = {
    getMails,
    getCurrencySymbol,
    getById,
    save,
    remove
}

function getMails() {
    return storageService.query(MAILS_KEY)
        .then(mails => {
            if (!mails.length) {
                mails = myMails;
                utilService.saveToStorage(MAILS_KEY, myMails);
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