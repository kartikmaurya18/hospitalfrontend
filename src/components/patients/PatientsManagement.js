const PatientsManagement = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPatient, setEditingPatient] = useState(null);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    try {
      const response = await api.get('/patients');
      setPatients(response.data);
    } catch (error) {
      console.error('Error loading patients:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingPatient(null);
    setModalOpen(true);
  };

  const handleEdit = (patient) => {
    setEditingPatient(patient);
    setModalOpen(true);
  };

  const handleDelete = async (patient) => {
    if (window.confirm(`Are you sure you want to delete ${patient.name}?`)) {
      try {
        await api.delete(`/patients/${patient.id}`);
        setPatients(patients.filter(p => p.id !== patient.id));
      } catch (error) {
        console.error('Error deleting patient:', error);
      }
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingPatient) {
        const response = await api.put(`/patients/${editingPatient.id}`, formData);
        setPatients(patients.map(p => p.id === editingPatient.id ? response.data : p));
      } else {
        const response = await api.post('/patients', formData);
        setPatients([...patients, response.data]);
      }
    } catch (error) {
      console.error('Error saving patient:', error);
    }
  };

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phoneNumber', label: 'Phone' },
    { 
      key: 'dateOfBirth', 
      label: 'Date of Birth',
      render: (value) => new Date(value).toLocaleDateString()
    },
    { key: 'medicalHistory', label: 'Medical History' }
  ];

  const fields = [
    { name: 'name', label: 'Full Name', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phoneNumber', label: 'Phone Number', required: true },
    { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', required: true },
    { name: 'medicalHistory', label: 'Medical History', type: 'textarea' }
  ];

  return (
    <>
      <DataTable
        title="Patients Management"
        data={patients}
        columns={columns}
        loading={loading}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      
      <FormModal
        title={editingPatient ? 'Edit Patient' : 'Add New Patient'}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        fields={fields}
        initialData={editingPatient}
      />
    </>
  );
};