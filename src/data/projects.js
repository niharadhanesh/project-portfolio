import lignora from '../assets/images/lignora.png';
import billingSoftware from '../assets/images/billing-software.avif';
import hospitalManagement from '../assets/images/hospital-management.webp';
import vehicleRental from '../assets/images/vehicle-rental.webp';
import pizzaDelivery from '../assets/images/pizza-delivery.avif';

export const projects = [
  {
    id: 1,
    category: 'Frontend Development',
    type: 'frontend',
    title: 'Lignora Wooden Craft',
    image: lignora,
    description:
      'A modern handcrafted furniture and wooden decor website featuring elegant product showcases, responsive design, and a premium shopping experience.',
    tech: ['React', 'CSS', 'Responsive UI'],
    live: '#',
    github: '#',
  },
  {
    id: 2,
    category: 'Backend Development',
    type: 'backend',
    title: 'Billing Software',
    image: billingSoftware,
    description:
      'A complete billing and invoicing system with customer management, invoice generation, reporting, and communication modules.',
    tech: ['Python', 'Django', 'MySQL'],
    live: '#',
    github: '#',
  },
  {
    id: 3,
    category: 'Backend Development',
    type: 'backend',
    title: 'Hospital Management System',
    image: hospitalManagement,
    description:
      'Role-based healthcare management platform for doctors, receptionists, patients, appointments, billing, and reports.',
    tech: ['Python', 'Django', 'REST API', 'MySQL'],
    live: '#',
    github: '#',
  },
  {
    id: 4,
    category: 'Backend Development',
    type: 'backend',
    title: 'Vehicle Rental Platform',
    image: vehicleRental,
    description:
      'Vehicle rental and service management platform with booking workflows, service tracking, billing, and admin controls.',
    tech: ['Django', 'MySQL', 'Bootstrap'],
    live: '#',
    github: '#',
  },
  {
    id: 5,
    category: 'Frontend Development',
    type: 'frontend',
    title: 'Pizza Delivery App',
    image: pizzaDelivery,
    description:
      'Modern food ordering interface with menu browsing, cart functionality, responsive layouts, and smooth user experience.',
    tech: ['React', 'CSS', 'JavaScript'],
    live: '#',
    github: '#',
  },
];