const Faq = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-5xl font-bold text-center my-10 md:my-16 dark:text-white">
        FAQ
      </h1>
      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How long can I borrow a book for?
          </div>
          <div className="collapse-content">
            <p>
              For now, we have free limit. You can take a book for as long as
              you want.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How many books can I borrow at once?
          </div>
          <div className="collapse-content">
            <p>You can borrow 3 books at once.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How can I borrow books?
          </div>
          <div className="collapse-content">
            <p>You can create an account & get started! :)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
