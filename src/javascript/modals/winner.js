import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';

export  function showWinnerModal(fighter) {
  const title = 'Winner:';
  const bodyElement = createWinnerInfo(fighter);
  showModal({ title, bodyElement });
}

function createWinnerInfo(fighter) {
  const { name } = fighter;
  const { source } = fighter;

  const winnerDetails = createElement({ tagName: 'div', className: 'modal-body' });
  const nameElement = createElement({ tagName: 'span', className: 'winner-name' });
  const imageElement = createImage(source);  

  nameElement.innerText = name + "\n";

  winnerDetails.append(nameElement);
  winnerDetails.append(imageElement);

  return winnerDetails;
}

function createImage(source) {
  const attributes = { src: source };
  const imgElement = createElement({ tagName: 'img', className: 'details-image', attributes });

  return imgElement;
}