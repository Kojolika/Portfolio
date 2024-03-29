import {LitElement, html, css} from 'lit';
import './content-section.js';
import './about-me-article.js';
import './work-experience.js';
import './projects.js';
import './contact-me.js';
import {centerChildren} from '../styles/centerChildren.js';

/**
 *
 */
export class InfoColumn extends LitElement {
	static styles = [centerChildren, css`
		:host{
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
      		min-width: 320px;
			width: 1280px;

			gap: 120px;

			padding-top: 28px;
			padding-bottom: 28px;
			padding-left: 8px;
			padding-right: 8px;
		}
		@media screen and (max-width: 832px){
			:host {
				width: 96%;
				padding-top: 20px;
				padding-bottom: 20px;
				padding-left: 4px;
				padding-right: 4px;
			}
		}
		@media screen and (max-width: 1468px) and (min-width: 832px){
			:host {
				width: 80%;
			}
		}
    `];

	/**
	* @return {html}
	*/
	render() {
		return html`
				<content-section id="about" sectionHeader="Hi, I'm Andrew.">
					<about-me></about-me>
				</content-section>
				<content-section id="projects" sectionHeader="Projects">
					<my-projects></my-projects>
				</content-section>
				<content-section id="contact" sectionHeader="Contact me!">
					<contact-me></contact-me>
				</content-section>
    	`;
	};
}
customElements.define('info-column', InfoColumn);
