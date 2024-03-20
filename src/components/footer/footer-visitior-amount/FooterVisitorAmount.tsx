'use client';

import LoadingSpinner from '@/components/shared/loading-spinner/LoadingSpinner';
import { useEffect, useRef, useState } from 'react';
import { FaPeopleGroup } from 'react-icons/fa6';
import Cookies from 'js-cookie';

export default function FooterVisitorAmount() {
  /**
   * Prevent the function from being executed twice during initial loading.
   */
  const executedRef = useRef(false);

  const [visitedUserCountState, setVisitedUserCountState] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);

  /**
   * Check if the user is a new visited-user or an already registered user.
   * If the user is a new visited-user then send an api request to register the user.
   * After that query all visited-user.
   */
  useEffect(() => {
    const loadInitialVisitedUser = async () => {
      if (!executedRef.current) {
        executedRef.current = true;
        const isFirstTimeVisitor = !Cookies.get('alreadyRegistered');

        try {
          /**
           * Register visited-user if alreadyRegistered cookie is not set or false
           */
          if (isFirstTimeVisitor) {
            const response = await fetch('/api/visited-user', {
              method: 'POST'
            });

            if (response.ok) {
              /**
               * Set cookie if user was successfully registered
               */
              Cookies.set('alreadyRegistered', 'true', { expires: 365 });
            } else {
              throw new Error('API call failed');
            }
          }

          /**
           * Fetch visited-user from api
           */
          const res = await fetch(`/api/visited-user`);
          const visitedUser = await res.json();

          setVisitedUserCountState(visitedUser.items);
        } catch (error) {
          console.error('Error')
        } finally {
          setInitialLoad(false);
        }
      }
    }

    loadInitialVisitedUser();
  }, [])

  return (
    <div className="flex items-center">
      <FaPeopleGroup className="text-4xl mr-3" />
      {initialLoad ? (
        <div className="h-6">
          <LoadingSpinner />
        </div>
      ) : <span>{visitedUserCountState}</span>}
    </div>
  )
}