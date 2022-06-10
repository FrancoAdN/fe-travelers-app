import CSS from 'csstype'
interface ProfileCapsuleProps {
  profilePhoto?: string;
  dimension: string;
  onClick: Function
}

export function ProfileCapsule({ profilePhoto, dimension, onClick }: ProfileCapsuleProps) {
  const source = profilePhoto ? profilePhoto : require('../../pictures/default-profile-icon.jpg');
  const styles: CSS.Properties = {
    width: dimension,
    height: dimension,
    borderRadius: '50%',
    cursor: 'pointer',
  };

  const imgStyles: CSS.Properties = {
    width: '100%',
    borderRadius: '50%'
  };

  return (
    <div style={styles} onClick={() => onClick()}>
      <img style={imgStyles} src={source} alt="user-profile"/>
    </div>
  )
}