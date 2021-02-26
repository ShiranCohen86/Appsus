
import { utilService } from './util-service.js'
import { storageService } from './async-storage-service.js'
const MAILS_KEY = 'mail'
const myMails = []
const DEFAULT_MAIL_COUNT = 10;

export const mailService = {
    getMails,
    getById,
    save,
    remove,
    createMails
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

function createMails() {
    for (let i = 0; i < DEFAULT_MAIL_COUNT; i++) {
        var mail = {
            id: utilService.makeId(),
            subject: 'Wassap? ' + i,
            body: 'Pick up! ' + i,
            isRead: false
        }
        myMails.push(mail)
    }
}

