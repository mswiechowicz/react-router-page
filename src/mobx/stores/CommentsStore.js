import { observable, action } from 'mobx';

export default class CommentsStore {
    @observable
    comments = [
        {'id':125, comment: 'Komentarz'}
    ];

    @action
    addComment = comment => this.comments.push(comment);

    @action
    removeComment = id => {
        const index = this.comments.findIndex(comment => comment.id === id);
        if(index === -1)  return 0;
        this.comments = this.comments.filter(comment => comment.id !== id)
    }
}