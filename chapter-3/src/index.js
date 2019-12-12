// import _ from "lodash";
// import "../styles/prism.css";
// import "../../node_modules/font-awesome/css/font-awesome.min.css";

import "./styles/main.scss";
import Slide from "./components/Slide";
import Card from "./components/Card";

import redPanda from "./images/red_panda.jpg";
import snowLeopard from "./images/snow_leopard.jpg";
import tiger from "./images/tiger.jpg";
import polarBear from "./images/polar_bear.jpg";
import giraffe from "./images/giraffe.jpg";
import walrus from "./images/walrus.jpg";
import artic_fox from "./images/artic_fox.jpg";

import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <>
    <Slide className="slide--intro" slideNumber="1">
      <h1>
        <span>Accessibility Lunch & Learn</span> Chapter 3
      </h1>
      <h2>Design implications</h2>
      <p className="large">
        Presented by <strong>Hector Osborne Rodriguez</strong>
        <br />
        <a href="mailto:hector.a.rodriguez@accenture.com">
          hector.a.rodriguez@accenture.com
        </a>
      </p>
    </Slide>
    <Slide className="slide light" slideNumber="2">
      <h2>Why are headings so important?</h2>
      <p>
        Maintaining a proper heading structure not only gives a visual
        separation but it also facilitates navigation for screen reader users.
        With a few keyboard strokes, a screen reader user can navigate to
        specific headings (and skip other content) when desired.
      </p>
      <p>
        Heading Styles should be listed hierarchically (Heading 1, Heading 2 to
        Heading 3 and so forth)
      </p>
      <p>
        The first thing a visually impaired user looks for in a new website is
        the heading hierarchy.
      </p>
      <blockquote>
        To test this, open your Screen Reader of preference
        <ul>
          <li>
            <strong>Voice Over:</strong> Turn on(Command + F5) and open the
            Rotor (Ctrl + Option + U)
          </li>
          <li>
            <strong>NVDA:</strong> Turn On: (Control + Alt + N) and open all
            headings (Insert + F7)
          </li>
        </ul>
      </blockquote>
      <br />
      <div className="grid grid--two_columns grid--row">
        <div className="grid--item">
          <label>Using {`<h1> <h2> <h> <h4> <h5>`}</label>
          <p>
            Using the proper HTML element,
            <br />
            these headings are listed accordingly.
          </p>
          <h1>Heading H1</h1>
          <h2>Heading H2</h2>
          <h3>Heading H3</h3>
          <h4>Heading H4</h4>
        </div>
        <div className="grid--item">
          <label>Using a paragraph </label>
          <p>
            Because these are fake headings,
            <br />
            elements won't show on the list.
          </p>
          <p className="h1">Not a Heading H1</p>
          <p className="h2">Not a Heading H2</p>
          <p className="h3">Not a Heading H3</p>
          <p className="h4">Not a Heading H4</p>
        </div>
      </div>
    </Slide>
    <Slide classNumber="" slideNumber="3">
      <h2>Expanding Design Wireframes</h2>
      <p>Let's look at a simple card design. </p>
      <div className="cards">
        <ul>
          <Card
            name="Card title"
            description="Card description. Do not exceed three lines or 240 characters."
            instagram="#"
            socialMedia="Social Media Link"
            showButton={true}
          ></Card>
        </ul>
      </div>
      <h3>QUESTIONS</h3>
      <ol>
        <li>What's should the focus order of the elements in a list?</li>
        <li>Is the card title a link?</li>
        <li>Should the entire card be clickable?</li>
        <li>
          What happens when clicking on the Edit Button? It shows a modal? it
          goes to a different URL?
        </li>
        <li>What's the label of the button? (for Screen Readers)</li>
        <li>Is this card going to be part of a list of card?</li>
      </ol>
    </Slide>
    <Slide className="light" slideNumber="4">
      <h2>Order focus</h2>
      <p>
        The{" "}
        <strong>
          <u>Focus Order</u>
        </strong>{" "}
        has an immediate impact on the development decisions.
      </p>

      <div className="cards">
        <ul>
          <Card
            name="Focus Order"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            instagram="#"
            socialMedia="here"
            showButton={true}
            showFocusOrder={true}
            showA11yLabel={false}
            showElementType={false}
          ></Card>
          <Card
            name="Focus Order"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            instagram="#"
            socialMedia="here"
            showButton={false}
            showFocusOrder={true}
            showA11yLabel={false}
            showElementType={false}
          ></Card>
          <Card
            name="Focus Order"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            socialMedia="here"
            showButton={true}
            showFocusOrder={true}
            showA11yLabel={false}
            showElementType={false}
          ></Card>
          {/* <Card
            name="Element Type"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            instagram="#"
            socialMedia="here"
            showButton={true}
            showFocusOrder={false}
            showA11yLabel={false}
            showElementType={true}
          ></Card>
          <Card
            name="Element Type"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            instagram="#"
            socialMedia="here"
            showButton={true}
            showFocusOrder={false}
            showA11yLabel={true}
            showElementType={false}
          ></Card> */}
          {/* <Card
            source={redPanda}
            alt="Ila a Red Panda from the Toronto Zoo"
            description="Happy Selfie Sunday from Ila, the red panda"
            name="Ila"
          ></Card>
          <Card
            source={snowLeopard}
            alt="Mylo - Snow Leopard"
            description="The elusive snow leopard, also known to as the “ghost cat”."
            name="Mylo"
          ></Card>
          <Card
            source={tiger}
            alt="Tiger - Harimau Kayu"
            description="Join us in wishing our beautiful Harimau Kayu a very Happy 11th Birthday! "
            name="Harimau Kayu"
            instagram="https://www.instagram.com/p/B4z2mYhggYM/"
          ></Card>
          <Card
            source={polarBear}
            alt="A Swimming Polar Bear"
            description="It’s #PolarBearWeek, take ation each day this week to save polar bears and the sea."
            name="Polar Bear Week"
            instagram="https://www.instagram.com/p/B4crZFMg5ky/"
          ></Card>
          <Card
            source={giraffe}
            alt="A smilling Giraffe"
            description="When someone tells you you’re handsome."
            name="Kiko"
            instagram="https://www.instagram.com/p/B5YF6fGA6sC/"
          ></Card> */}
        </ul>
      </div>

      <p>When looking at this image a developer knows:</p>
      <ul>
        <li>The entire card is clickable.</li>
        <li>Some elements are optional (bottom link or button)</li>
        <li>
          When using the keyboard, the elements are navigated top to bottom and
          left to right
        </li>
        <li>
          This also helps on responsive Design. Generally the focus order should
          be respected when stacking elements on Mobile or Tablet.
        </li>
      </ul>
      <blockquote>
        Exercise: Resize the browser to see how the element stack. The focus
        order should remain the same.{" "}
      </blockquote>
    </Slide>
    <Slide className="" slideNumber="5">
      <h2>Element Type</h2>
      <p>
        Another way to enhance the card design is to indicate the element types
        for each part of it.
      </p>
      <p>
        Is it a <strong>{`<button>`} </strong> or a <strong>{`<link>`}</strong>
        ?.
      </p>

      <div className="cards">
        <ul>
          <Card
            name="Card Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            instagram="#"
            socialMedia="here"
            showButton={true}
            showFocusOrder={false}
            showA11yLabel={false}
            showElementType={true}
          ></Card>
          {/* <Card
            name="Element Type"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            instagram="#"
            socialMedia="here"
            showButton={true}
            showFocusOrder={false}
            showA11yLabel={false}
            showElementType={true}
          ></Card>
          <Card
            name="Element Type"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            instagram="#"
            socialMedia="here"
            showButton={true}
            showFocusOrder={false}
            showA11yLabel={true}
            showElementType={false}
          ></Card> */}
          {/* <Card
            source={redPanda}
            alt="Ila a Red Panda from the Toronto Zoo"
            description="Happy Selfie Sunday from Ila, the red panda"
            name="Ila"
          ></Card>
          <Card
            source={snowLeopard}
            alt="Mylo - Snow Leopard"
            description="The elusive snow leopard, also known to as the “ghost cat”."
            name="Mylo"
          ></Card>
          <Card
            source={tiger}
            alt="Tiger - Harimau Kayu"
            description="Join us in wishing our beautiful Harimau Kayu a very Happy 11th Birthday! "
            name="Harimau Kayu"
            instagram="https://www.instagram.com/p/B4z2mYhggYM/"
          ></Card>
          <Card
            source={polarBear}
            alt="A Swimming Polar Bear"
            description="It’s #PolarBearWeek, take ation each day this week to save polar bears and the sea."
            name="Polar Bear Week"
            instagram="https://www.instagram.com/p/B4crZFMg5ky/"
          ></Card>
          <Card
            source={giraffe}
            alt="A smilling Giraffe"
            description="When someone tells you you’re handsome."
            name="Kiko"
            instagram="https://www.instagram.com/p/B5YF6fGA6sC/"
          ></Card> */}
        </ul>
      </div>

      <p>
        Many questions are automatically answered by adding more information to
        the design.
      </p>
      <p>
        The title card is not a link, the entire card should be clickable. We
        could also indicate in the notes were should this link to. Example: Go
        to animal's detail page.
      </p>
      <p>
        We can also tell now that the button is not opening a modal, but instead
        is redirecting to another page. We also know that this link should be
        added before the Social Media Link in the DOM.
      </p>
    </Slide>
    <Slide className="light" slideNumber="6">
      <h2>Accessibility Description</h2>

      <p>
        The edit button is a common icon button used on websites, however for
        the visually impaired users it's important to add a description (label)
        to give the users more context.
      </p>
      <p>
        For instance in an eCommerce website, imagine how many "Add To Cart"
        buttons are in the page. We could enhance the buttons to announce the
        name of the product "Add - Nike Shoes - To Cart"
      </p>
      <p>
        These descriptions should be authorable, because they might need to be
        translated accordingly.
      </p>
      <div className="cards">
        <ul>
          <Card
            name="Card Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            instagram="#"
            socialMedia="here"
            showButton={true}
            showFocusOrder={false}
            showA11yLabel={true}
            showElementType={false}
          ></Card>
        </ul>
      </div>
    </Slide>
    <Slide className="" slideNumber="7">
      <h2>Enhanced Card Result</h2>
      <div className="cards">
        <ul>
          <Card
            name="Card Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            instagram="#"
            socialMedia="here"
            showButton={true}
            showFocusOrder={true}
            showA11yLabel={false}
            showElementType={false}
          ></Card>
          <Card
            name="Card Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            instagram="#"
            socialMedia="here"
            showButton={true}
            showFocusOrder={false}
            showA11yLabel={true}
            showElementType={true}
          ></Card>
        </ul>
      </div>
    </Slide>
    <Slide className="light" slideNumber="7">
      <h2>Result</h2>
      <div className="cards">
        <ul>
          <Card
            source={redPanda}
            alt="Ila a Red Panda from the Toronto Zoo"
            description="Happy Selfie Sunday from Ila, the red panda"
            name="Ila"
          ></Card>
          <Card
            source={snowLeopard}
            alt="Mylo - Snow Leopard"
            description="The elusive snow leopard, also known to as the “ghost cat”."
            name="Mylo"
          ></Card>
          <Card
            source={tiger}
            alt="Tiger - Harimau Kayu"
            description="Join us in wishing our beautiful Harimau Kayu a very Happy 11th Birthday! "
            name="Harimau Kayu"
            instagram="https://www.instagram.com/p/B4z2mYhggYM/"
          ></Card>
          <Card
            source={polarBear}
            alt="A Swimming Polar Bear"
            description="It’s #PolarBearWeek, take ation each day this week to save polar bears and the sea."
            name="Polar Bear Week"
            instagram="https://www.instagram.com/p/B4crZFMg5ky/"
          ></Card>
          <Card
            source={giraffe}
            alt="A smilling Giraffe"
            description="When someone tells you you’re handsome."
            name="Kiko"
            instagram="https://www.instagram.com/p/B5YF6fGA6sC/"
          ></Card>
        </ul>
      </div>
    </Slide>

    <Slide className="" slideNumber="8">
      <h2>Key takeaways</h2>
      <ol>
        <li>
          Adding <code>Focus Order</code> to wireframes gives designers and
          developers context on the usage of the components.
        </li>
        <li>
          Button element should be designed for all status: <code>default</code>
          , <code>:hover</code>, <code>:pressed</code>, <code>:focus</code>
        </li>
        <li>
          Buttons and links are not the same. Giving context on their usage
          helps the developer choose the proper HTML element to use.
        </li>
        <li>
          Buttons, specially icon buttons, require authorable text to give more
          context to visually impaired users.
        </li>
      </ol>

      <h3>More information at: </h3>
      <ul>
        <li>
          <a href="https://medium.com/@madebyhector/when-does-an-anchor-becomes-a-button-eca8ad5c522c">
            Medium: When does an anchor becomes a button
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/WAI/GL/wiki/Making_actions_keyboard_accessible_by_using_keyboard_event_handlers_with_WAI-ARIA_controls">
            Making actions keyboard accessible by using keyboard event handlers
            with WAI-ARIA controls
          </a>
        </li>
      </ul>
    </Slide>
    <div
      id="notification"
      aria-live="polite"
      aria-atomic="true"
      className="notification hide"
    >
      <p className="text"></p>
      <button
        type="button"
        className="notification--close button button--small"
        aria-label="Close notification"
      >
        <span className="fa fa-close"></span>
      </button>
    </div>
  </>
);
ReactDOM.render(<App />, document.getElementById("root"));
