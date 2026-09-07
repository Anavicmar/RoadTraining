const routineData = {
  dayName: "Día 1: Cuerpo Completo Funcional",
  notes: "Pesos recomendados: Burpees y tijeras (10-15 lbs) | Sentadillas y press (12-20 lbs) | Puente de glúteo (50-85 lbs) | Step (10-15 lbs)",
  circuits: [
    {
      id: 1,
      title: "Circuito 1",
      rounds: 3,
      exercises: [
        {
          id: "1-1",
          name: "Lateral + Frontal a Burpee",
          description: "Elevación lateral para hombros, llevar al frente y luego bajar tipo burpees.",
          reps: "12 reps",
          weight: "10 - 15 lbs",
          images: [
            "assets/media_1788727898292.jpg",
            "assets/media_1788727898376.jpg"
          ]
        },
        {
          id: "1-2",
          name: "Lunge con Biceps Martillo",
          description: "Lunge (tijera) haciendo curl de bíceps tipo martillo simultáneamente.",
          reps: "12 reps",
          weight: "10 - 15 lbs",
          images: []
        },
        {
          id: "1-3",
          name: "Bíceps Frontal",
          description: "Curl de bíceps tradicional al frente.",
          reps: "12 reps",
          weight: "Moderado",
          images: []
        },
        {
          id: "1-4",
          name: "Lunge con Pesas a los Lados",
          description: "Lunge estático o caminando con pesas sostenidas a los lados del cuerpo.",
          reps: "12 reps",
          weight: "10 - 15 lbs",
          images: []
        },
        {
          id: "1-5",
          name: "Sentadilla a Press de Hombros",
          description: "Sentadillas con los brazos al frente; al subir, giras los brazos para hacer un press de hombros.",
          reps: "12 reps",
          weight: "12 - 20 lbs",
          images: [
            "assets/media_1788727957011.jpg",
            "assets/media_1788728343093.jpg",
            "assets/media_1788728343094.jpg"
          ]
        },
        {
          id: "1-6",
          name: "Sentadilla Lateral (Tipo Sumo)",
          description: "Caminando hacia los lados: 3 pasos hacia un lado y 3 hacia el otro, sosteniendo la pesa abajo (estilo sumo). Repetir 3 veces hacia cada lado.",
          reps: "3 idas y vueltas",
          weight: "Pesado",
          images: []
        },
        {
          id: "1-7",
          name: "Puente de Glúteo con Banda",
          description: "Puente con banda en las piernas y pesa pesada en la cadera. Abrir las rodillas al subir.",
          reps: "12 reps",
          weight: "50 - 85 lbs",
          images: []
        },
        {
          id: "1-8",
          name: "Lunge en Step a lo Alto",
          description: "Lunge subiendo una pierna en un cajón, step o superficie alta.",
          reps: "12 reps",
          weight: "10 - 15 lbs",
          images: []
        }
      ]
    },
    {
      id: 2,
      title: "Circuito 2",
      rounds: 3,
      exercises: [
        {
          id: "2-1",
          name: "Lunge en Step con Press Cerrado",
          description: "Haciendo hombros en simultáneo: press cerrado para hombros bajando los brazos al bajar en el lunge y subiendo los brazos al subir.",
          reps: "12 reps",
          weight: "10 - 15 lbs",
          images: []
        },
        {
          id: "2-2",
          name: "Lunge Rápido en Step",
          description: "Lunge en el step rápido sin pesas.",
          reps: "12 reps",
          weight: "Sin peso",
          images: []
        },
        {
          id: "2-3",
          name: "Repetición Lunge Combo",
          description: "Repetir los dos ejercicios anteriores dos veces más (para un total de 4 series de este combo).",
          reps: "2 series más",
          weight: "Varios",
          images: []
        },
        {
          id: "2-4",
          name: "Elevación de Pierna Lateral",
          description: "Acostada de lado, subir y bajar la pierna con una liga (banda de resistencia) en los tobillos.",
          reps: "12 reps por lado",
          weight: "Liga de resistencia",
          images: []
        }
      ]
    },
    {
      id: 3,
      title: "Complemento: Máquinas",
      rounds: 4,
      exercises: [
        {
          id: "3-1",
          name: "Prensa (Pies arriba y cerrados)",
          description: "Prensa de piernas colocando los pies juntos y en la parte alta de la plataforma para enfocar en glúteos e isquiotibiales.",
          reps: "12 reps",
          weight: "Pesado",
          images: []
        },
        {
          id: "3-2",
          name: "Polea Lateral para Glúteos",
          description: "Elevación de pierna lateral en polea baja para trabajar el glúteo.",
          reps: "12 reps por lado",
          weight: "Moderado",
          images: []
        }
      ]
    }
  ]
};

const Header = () => (
  <header className="bg-purple-700 text-white p-6 shadow-md rounded-b-3xl mb-6">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight">Mis Entrenamientos</h1>
      <p className="mt-2 text-purple-200">Progreso diario y rutinas personalizadas</p>
    </div>
  </header>
);

const ExerciseCard = ({ exercise, index }) => (
  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 exercise-card mb-4 flex flex-col sm:flex-row gap-4">
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-2">
        <span className="bg-purple-100 text-purple-700 font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm">
          {index + 1}
        </span>
        <h3 className="text-lg font-bold text-gray-800">{exercise.name}</h3>
      </div>
      <p className="text-gray-600 mb-4 ml-11">{exercise.description}</p>
      
      <div className="flex flex-wrap gap-2 ml-11">
        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
          {exercise.reps}
        </span>
        <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
          {exercise.weight}
        </span>
      </div>
    </div>
    
    {exercise.images && exercise.images.length > 0 && (
      <div className="flex gap-2 sm:w-1/3 overflow-x-auto snap-x">
        {exercise.images.map((img, i) => (
          <img 
            key={i} 
            src={img} 
            alt={`Demostración ${i + 1}`} 
            className="w-32 h-32 object-cover rounded-xl shadow-sm snap-center"
          />
        ))}
      </div>
    )}
  </div>
);

const CircuitSection = ({ circuit }) => (
  <div className="mb-8">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-bold text-gray-800">{circuit.title}</h2>
      <span className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-bold">
        {circuit.rounds} Rondas
      </span>
    </div>
    <div className="space-y-4">
      {circuit.exercises.map((ex, index) => (
        <ExerciseCard key={ex.id} exercise={ex} index={index} />
      ))}
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen pb-12">
      <Header />
      
      <main className="max-w-3xl mx-auto px-4">
        <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 mb-8">
          <h2 className="font-bold text-purple-800 text-xl mb-1">{routineData.dayName}</h2>
          <p className="text-purple-600 text-sm flex items-start gap-2 mt-2">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {routineData.notes}
          </p>
        </div>

        {routineData.circuits.map(circuit => (
          <CircuitSection key={circuit.id} circuit={circuit} />
        ))}

        <div className="mt-8 text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95">
            ¡Completar Entrenamiento!
          </button>
        </div>
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
