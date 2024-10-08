function Home() {
  return (
    <div>
      <header className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Understanding Diabetes</h1>
      </header>
      <main className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <img src="https://via.placeholder.com/400x300" alt="Diabetes Infographic" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">What is Diabetes?</h2>
          <p className="mb-4">
            Diabetes is a chronic health condition that affects how your body turns food into energy. 
            There are three main types of diabetes: Type 1, Type 2, and Gestational diabetes.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Key Facts</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Diabetes affects millions of people worldwide</li>
            <li>It can lead to serious health complications if left unmanaged</li>
            <li>Symptoms include increased thirst, frequent urination, and fatigue</li>
            <li>Management involves medication, diet, and lifestyle changes</li>
          </ul>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Prevention</h2>
          <p className="mb-2">
            While Type 1 diabetes cannot be prevented, Type 2 diabetes risk can be reduced by:
          </p>
          <ul className="list-disc pl-5">
            <li>Maintaining a healthy weight</li>
            <li>Regular physical activity</li>
            <li>Eating a balanced diet</li>
            <li>Avoiding smoking and excessive alcohol consumption</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Home;