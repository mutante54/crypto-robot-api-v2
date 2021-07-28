export class UserAccount {
    constructor(opts) {
        this.id = '';
        this.name = '';
        this.document = '';
        this.username = '';
        this.role = '';

        Object.assign(this, opts);
    }
}