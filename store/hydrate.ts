import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper'; 

// this is a special action that must be used in order to properly reconcile 
// the hydratd state on top of the existing state
export interface HydrateAction extends AnyAction {
    type: typeof HYDRATE
}
// Each reducer must have a handler for this action. Because each time when pages 
// that have getServerSideProps are opned by a user the HYDRATE action will 
// be dispatched 