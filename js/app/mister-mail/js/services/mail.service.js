
import { utilService } from './util-service.js'
import { storageService } from './async-storage-service.js'

const MAILS_KEY = 'mail'
const myMails = [
    {
        from: 'John',
        subject: 'Wassap?',
        body: 'Pick up! im not read yet',
        isRead: false,
        isSent: false,
        isStarred: false,
        sentAt: 155118230594,
        id: utilService.makeId()
    },
    {
        from: 'Seneca',
        subject: 'True happiness',
        body: `True happiness is to enjoy the present, without anxious dependence upon the future, not to amuse ourselves with either hopes or fears but to rest satisfied with what we have, which is sufficient, for he that is so wants nothing. The greatest blessings of mankind are within us and within our reach. A wise man is content with his lot, whatever it may be, without wishing for what he has not`,
        isRead: false,
        isSent: false,
        isStarred: false,
        sentAt: 1551133930594,
        id: utilService.makeId()
    },
    {
        from: 'Lubo',
        subject: 'Your free trial ends today',
        body: `Hello,
    
                Today is the last day of your free trial. Time flies, right?
    
                If you don't purchase a subscription, you and your team will lose access to Avocode.
    
                Get Avocode subscription.
    
                If you still have any questions about our app, plans, features, or billing, reply to this email, and I will be happy to help.
    
                Cheers,
    
                Lubomir Kracun
                Customer Success Manager, Avocode`,
        isRead: true,
        isSent: true,
        isStarred: true,
        sentAt: 1551133123456,
        id: utilService.makeId()
    },
    {
        from: 'Douglas Adams',
        subject: 'the answer to life, the universe and everything',
        body: '42',
        isRead: true,
        isSent: true,
        isStarred: true,
        sentAt: 1551133930594,
        id: utilService.makeId()
    },
    {
        from: 'A.Einstein',
        subject: `Two things are infinite:`,
        body: `the universe and human stupidity. and I'm not sure about the universe.`,
        isRead: true,
        isSent: true,
        isStarred: true,
        sentAt: 1551133930544,
        id: utilService.makeId()
    },
    {
        from: 'Haruki Murakami',
        subject: 'About fate',
        body: `Sometimes fate is like a small sandstorm that keeps changing directions. You change direction but the sandstorm chases you. You turn again, but the storm adjusts. Over and over you play this out, like some ominous dance with death just before dawn. Why? Because this storm isn’t something that blew in from far away, something that has nothing to do with you. This storm is you. Something inside of you. So all you can do is give in to it, step right inside the storm, closing your eyes and plugging up your ears so the sand doesn’t get in, and walk through it, step by step. There’s no sun there, no moon, no direction, no sense of time. Just fine white sand swirling up into the sky like pulverized bones. That’s the kind of sandstorm you need to imagine.
                And you really will have to make it through that violent, metaphysical, symbolic storm. No matter how metaphysical or symbolic it might be, make no mistake about it: it will cut through flesh like a thousand razor blades. People will bleed there, and you will bleed too. Hot, red blood. You’ll catch that blood in your hands, your own blood and the blood of others.
                And once the storm is over you won’t remember how you made it through, how you managed to survive. You won’t even be sure, in fact, whether the storm is really over. But one thing is certain. When you come out of the storm you won’t be the same person who walked in. That’s what this storm’s all about.`, isRead: true, isSent: true, isStarred: true, sentAt: 1551133930598, id: utilService.makeId()
    },
    {
        from: 'Kurt',
        subject: 'Come',
        body: 'As you are',
        isRead: true,
        isSent: true,
        isStarred: true,
        sentAt: 1551133930594,
        id: utilService.makeId()
    },
    {
        from: 'Pink',
        subject: 'Keep in mind',
        body: `Every year is getting shorter, never seem to find the time. Plans that either come to naught or half a page of scribbled lines. Hanging on in quiet desperation is the English way. The time is gone, the song is over, thought I'd something more to say.`,
        isRead: false,
        isSent: true,
        isStarred: true,
        sentAt: 1551133930596,
        id: utilService.makeId()
    },
    {
        from: 'Pink',
        subject: 'Shine on',
        body: `Remember when you were young, you shone like the sun.
            Shine on you crazy diamond.
            Now there’s a look in your eyes, like black holes in the sky.
            Shine on you crazy diamond.
            You were caught on the crossfire of childhood and stardom,
            Blown on the steel breeze.
            Come on you target for faraway laughter,
            Come on you stranger, you legend, you martyr, and shine!
            You reached for the secret too soon, you cried for the moon.`,
        isRead: false,
        isSent: true,
        isStarred: false,
        sentAt: 1551133930599,
        id: utilService.makeId()
    },
    {
        from: 'Inigo Montoya',
        subject: 'You killed my father',
        body: 'Prepare to die',
        isRead: true,
        isSent: true,
        isStarred: true,
        sentAt: 1551133930597,
        id: utilService.makeId()
    },
    {
        from: 'eBay',
        subject: 'ORDER UPDATE',
        body: `Hi, your order is being shipped!`,
        isRead: false,
        isSent: true,
        isStarred: true,
        sentAt: 1551133930601,
        id: utilService.makeId()
    }
]

export const mailService = {
    getMails,
    getById,
    save,
    remove,
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


