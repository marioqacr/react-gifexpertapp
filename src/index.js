
import GifExpertApp from './GifExpertApp';
import './index.css';
import { createRoot } from 'react-dom/client';

const divRoot = document.querySelector('#root');
const root = createRoot( divRoot );
root.render( < GifExpertApp /> );
