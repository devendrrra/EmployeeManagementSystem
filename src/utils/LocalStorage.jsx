
const employees = [
  
    {
      "id": 1,
      "name": "Aarav",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Sales Report",
          "description": "Complete the sales report",
          "date": "2025-01-30",
          "category": "Sales",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Presentation",
          "description": "Prepare a presentation for Q1",
          "date": "2025-02-05",
          "category": "Meetings",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Manage the Client",
          "description": "Follow up with client",
          "date": "2025-01-28",
          "category": "Client Management",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1,
        "total": 3
      }
    },
    {
      "id": 2,
      "name": "Vihaan",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "FIX Bugs",
          "description": "Fix bugs in the inventory system",
          "date": "2025-01-25",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "API View",
          "description": "Test the new API endpoints",
          "date": "2025-01-27",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0,
        "total": 2
      }
    },
    {
      "id": 3,
      "name": "Ishaan",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Meeting",
          "description": "Organize team meeting",
          "date": "2025-01-29",
          "category": "Management",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Create Project",
          "description": "Draft a project proposal",
          "date": "2025-02-01",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Training Schedule",
          "description": "Create a training schedule",
          "date": "2025-01-28",
          "category": "Training",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1,
        "total": 3
      }
    },
    {
      "id": 4,
      "name": "Arjun",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Increse Sales",
          "description": "Plan a marketing campaign",
          "date": "2025-02-10",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 0,
        "failed": 0,
        "total": 1
      }
    },
    {
      "id": 5,
      "name": "Anaya",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Customer Survey",
          "description": "Conduct a customer survey",
          "date": "2025-01-31",
          "category": "Engagement",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Survey",
          "description": "Analyze survey results",
          "date": "2025-02-05",
          "category": "Analysis",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0,
        "total": 2
      }
    }
  
];

const admin = [
  {
    "id": 1,
    "name": "Raj",
    "email": "admin@example.com",
    "password": "123"
  }
];


 export const setLocalStorage = ()=>{
           localStorage.setItem('employees',JSON.stringify(employees))
           localStorage.setItem('admin',JSON.stringify(admin))
 } 
 export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
   
 } 