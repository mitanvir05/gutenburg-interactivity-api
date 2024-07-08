import { useState } from "@wordpress/element";

const Edit = ({ attributes, setAttributes, isSelected }) => {
  const { currentPage } = attributes;
  const [activePage, setActivePage] = useState(currentPage || 1);

  const handleNextPage = () => {
    setActivePage(activePage + 1);
    setAttributes({ currentPage: activePage + 1 });
  };

  const handlePreviousPage = () => {
    setActivePage(activePage - 1);
    setAttributes({ currentPage: activePage - 1 });
  };

  return (
    <div className="my-first-interactive-block">
      <PaginationControls
        currentPage={activePage}
        onNext={handleNextPage}
        onPrevious={handlePreviousPage}
      />
      <div className="block-content">
        {activePage === 1 && (
          <div>
            <p>
              In the realm of digital creativity and user interface design, the
              evolution of Gutenberg blocks represents a pivotal advancement in
              WordPress development. These blocks, encapsulating diverse
              functionalities from text formatting to complex interactive
              elements, empower developers to craft rich, modular content
              experiences effortlessly. At the forefront of this innovation lies
              the aspiration to blend intuitive user experiences with robust
              technical capabilities, ensuring seamless content creation for
              millions of WordPress users worldwide. Each block serves as a
              building block, metaphorically and literally, enabling creators to
              assemble dynamic layouts that adapt to diverse content needs.
            </p>
          </div>
        )}
        {activePage === 2 && (
          <div>
            <p>
              At the forefront of this innovation lies the aspiration to blend
              intuitive user experiences with robust technical capabilities,
              ensuring seamless content creation for millions of WordPress users
              worldwide. Each block serves as a building block, metaphorically
              and literally, enabling creators to assemble dynamic layouts that
              adapt to diverse content needs.
            </p>
            <img src="https://w7.pngwing.com/pngs/519/952/png-transparent-tom-and-jerry-illustration-jerry-mouse-tom-cat-nibbles-tom-and-jerry-tom-jerry-s-tom-and-jerry-mammal-heroes-cat-like-mammal-thumbnail.png"></img>
          </div>
        )}
        {activePage === 3 && (
          <div>
           
            <img src="https://easydrawingguides.com/wp-content/uploads/2019/11/how-to-draw-tom-from-tom-and-jerry-featured-image-1200.png"></img>
          </div>
        )}
      </div>
    </div>
  );
};

const PaginationControls = ({ currentPage, onNext, onPrevious }) => (
  <div className="pagination">
    <button onClick={onPrevious} disabled={currentPage === 1}>
      Previous
    </button>
    <span>{`Page ${currentPage}`}</span>
    <button onClick={onNext}>Next</button>
  </div>
);

export default Edit;
