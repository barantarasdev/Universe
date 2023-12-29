import {useMemo} from 'react';
import {usePathname} from 'next/navigation';
import {UseNavLinkProps, UseNavLinkR} from 'src/components/NavLink/types';
import * as Styled from 'src/components/NavLink/styles';

function useNavLink({href}: UseNavLinkProps): UseNavLinkR {
  const pathname = usePathname();

  const navLinkClasses = useMemo(
    () => (href === pathname ? Styled.Active : {}),
    [href, pathname],
  );

  return {navLinkClasses};
}

export default useNavLink;
