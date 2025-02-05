import { Icons } from '@/app/assets/icons';
import { UserDataProps } from '@/types/types';

import './Offerings.scss';

const Offerings = ({ data }: { data: UserDataProps }) => {
  return (
    <div className='offerings'>
      {data?.post?.firstAid && (
        <div className='item' title={`First Aid Certificate`}>
          <div
            className='circle'
            style={{ backgroundColor: 'var(--offerings-first-aid)' }}>
            <Icons.FirstAid size='22px' />
          </div>
          <div className='item--label'>First Aid Certificate</div>
        </div>
      )}
      {data?.post?.sitterCourse && (
        <div className='item' title='Sitter Course'>
          <div
            className='circle'
            style={{ backgroundColor: 'var(--offerings-sitter-course)' }}>
            <Icons.SitterCourse size='22px' />
          </div>
          <div className='item--label'>Sitter Course</div>
        </div>
      )}
      {data?.post?.pets && (
        <div className='item' title='I can work with pets present'>
          <div
            className='circle'
            style={{ backgroundColor: 'var(--offerings-pets)' }}>
            <Icons.Pets size='22px' />
          </div>
          <div className='item--label'>Pets</div>
        </div>
      )}
      {data?.post?.specialNeeds && (
        <div
          className='item'
          title='I can babysit children with the special needs'>
          <div
            className='circle'
            style={{ backgroundColor: 'var(--offerings-special-needs)' }}>
            <Icons.SpecialNeeds size='22px' />
          </div>
          <div className='item--label'>Special Needs</div>
        </div>
      )}
      {data?.post?.inOwnHouse && (
        <div className='item' title=''>
          <div
            className='circle'
            style={{ backgroundColor: 'var(--offerings-in-own-house)' }}>
            <Icons.House size='22px' />
          </div>
          <div className='item--label'>inOwnHouse</div>
        </div>
      )}
      {data?.post?.cleaning && (
        <div className='item' title=''>
          <div
            className='circle'
            style={{ backgroundColor: 'var(--offerings-cleaning)' }}>
            <Icons.Cleaning size='22px' />
          </div>
          <div className='item--label'>Cleaning</div>
        </div>
      )}
      {data?.post?.cleaningChildOnly && !data?.post?.cleaning && (
        <div className='item' title=''>
          <div
            className='circle'
            style={{ backgroundColor: 'var(--offerings-cleaning-children)' }}>
            <Icons.CleaningChildren size='22px' />
          </div>
          <div className='item--label'>CleaningChildren</div>
        </div>
      )}
      {data?.post?.shopping && (
        <div className='item' title=''>
          <div
            className='circle'
            style={{ backgroundColor: 'var(--offerings-shopping)' }}>
            <Icons.Shopping size='22px' />
          </div>
          <div className='item--label'>Shopping</div>
        </div>
      )}
      {data?.post?.cooking && (
        <div className='item' title=''>
          <div
            className='circle'
            style={{ backgroundColor: 'var(--offerings-cooking)' }}>
            <Icons.Cooking size='22px' />
          </div>
          <div className='item--label'>Cooking</div>
        </div>
      )}
      {data?.post?.cookingChildOnly && !data?.post?.cooking && (
        <div className='item' title=''>
          <div
            className='circle'
            style={{ backgroundColor: 'var(--offerings-cooking-children)' }}>
            <Icons.CookingChildren size='22px' />
          </div>
          <div className='item--label'>CookingChildren</div>
        </div>
      )}
      {data?.post?.outWithChild && (
        <div className='item' title=''>
          <div
            className='circle'
            style={{ backgroundColor: 'var(--offerings-out-with-child)' }}>
            <Icons.Outdoor size='22px' />
          </div>
          <div className='item--label'>outWithChild</div>
        </div>
      )}
      {data?.post?.car && data?.post?.driversLicense && (
        <div className='item' title=''>
          <div
            className='circle'
            style={{ backgroundColor: 'var(--offerings-car)' }}>
            <Icons.Car size='22px' />
          </div>
          <div className='item--label'>Car</div>
        </div>
      )}
      {data?.post?.driversLicense && (
        <div className='item' title=''>
          <div
            className='circle'
            style={{ backgroundColor: 'var(--offerings-drivers-license)' }}>
            <Icons.DriverLicense size='22px' />
          </div>
          <div className='item--label'>DriverLicense</div>
        </div>
      )}
      {data?.post?.notSmoking && (
        <div className='item' title=''>
          <div
            className='circle'
            style={{ backgroundColor: 'var(--offerings-not-smoking)' }}>
            <Icons.NotSmoking />
          </div>
          <div className='item--label'>NotSmoking</div>
        </div>
      )}
    </div>
  );
};

export default Offerings;
