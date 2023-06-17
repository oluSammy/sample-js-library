import MicroModal from "micromodal";
MicroModal.init();

export const showModal = () => {
  document.body.insertAdjacentHTML("afterbegin", modalTemplate);
//   MicroModal.show("modal-1");
};

export const hideModal = () => {
//   MicroModal.close("modal-1");
  const element = document.getElementById("modal-1");
  if (element) {
    element.remove();
  }
};

const modalTemplate = `
    <div id="modal-1" aria-hidden="true">
        <div tabindex="-1" data-micromodal-close>
            <div role="dialog" aria-modal="true" aria-labelledby="modal-1-title" style="background-color: red; width: 100vw;" >
                <header>
                    <h2 id="modal-1-title">
                    Modal Title
                    </h2>
                    <button aria-label="Close modal" data-micromodal-close onClick="(function(){
                        return false;
                    })();return false;">close</button>
                </header>
                <div style="color: red;" id="modal-1-content">
                    Modal Content
                </div>
            </div>
        </div>
    </div>
`;
