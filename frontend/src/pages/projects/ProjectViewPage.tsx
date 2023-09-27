import { Link } from 'react-router-dom';
import Project from '../../components/Project';
import GoBack from '../../components/GoBack';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProjectDetail } from '../../services/proyectos';
import { Projects } from '../../interfaces/projects';

export default function ProjectViewPage() {
  return (
    <>
      <div>
        <Link to="http://localhost:5173/allprojects">
          <GoBack />
        </Link>
      </div>
      <Project />
    </>
  );
}
