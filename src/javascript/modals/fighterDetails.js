import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';

export  function showFighterDetailsModal(fighter) {
  const title = 'Fighter info';
  const bodyElement = createFighterDetails(fighter);
  showModal({ title, bodyElement });
}

function createFighterDetails(fighter) {
  const { name } = fighter;
  const { attack } = fighter;
  const { defense } = fighter;
  const { health } = fighter;
  const { source } = fighter;

  const fighterDetails = createElement({ tagName: 'div', className: 'modal-body' });
  const nameElement = createElement({ tagName: 'span', className: 'details' });
  const attackElement = createElement({ tagName: 'span', className: 'details' });
  const defenseElement = createElement({ tagName: 'span', className: 'details' });
  const healthElement = createElement({ tagName: 'span', className: 'details' });
  const imageElement = createImage(source);

  nameElement.innerHTML = "<b>Name:</b> " + name +"<br/>";
  attackElement.innerHTML = "<b>Attatck:</b> " + attack + "<br/>";
  defenseElement.innerHTML = "<b>Defense:</b> " + defense + "<br/>";
  healthElement.innerHTML = "<b>Health:</b> " + health + "<br/>";

  fighterDetails.append(nameElement);
  fighterDetails.append(attackElement);
  fighterDetails.append(defenseElement);
  fighterDetails.append(healthElement);
  fighterDetails.append(imageElement);

  return fighterDetails;
}

function createImage(source) {
  const attributes = { src: source };
  const imgElement = createElement({ tagName: 'img', className: 'details-image', attributes });

  return imgElement;
}
