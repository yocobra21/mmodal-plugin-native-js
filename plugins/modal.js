$.modal = function (options) {

    function _createModal(options) {
        const modal = document.createElement('div');
        modal.classList.add('mmodal');
        modal.insertAdjacentHTML('afterbegin', `
                <div class="modal-overlay">
                    <div class="modal-window">
                        <div class="modal-header">
                            <span class="modal-title">Modal title</span>
                            <span class="modal-close">&times;</span>
                        </div>
                        <div class="modal-body">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success">OK</button>
                            <button type="button" class="btn btn-danger">CANCEL THAT</button>
                        </div>
                    </div>
                </div>
        `);
        document.body.appendChild(modal);
        return modal;
    }

    // title: str
    // closable : Boolean
    // content: str
    // destriy: void
    //window close
    // width
    // public setContent(html: str) void
    //onClose()
    //onOpen()
    //beforeClose( )
    //animate.css

    const ANIMATION_SPEED = 500;
    const $modal = _createModal(options);
    let closing = false;

    return {
        open() {
            !closing && $modal.classList.add('open');
        },
        close() {
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('hide');
            setTimeout(() => {
                $modal.classList.remove('hide');
                closing = false;
            }, ANIMATION_SPEED);
        },
        destroy() { }
    }
}