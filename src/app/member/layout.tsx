interface MemberType {
  children: React.ReactNode;
  memberUser: React.ReactNode;
  comments: React.ReactNode;
}

const LayoutMember = ({ children, memberUser, comments }: MemberType) => {
  return (
    <>
      {children}
      {memberUser}
      {comments}
    </>
  );
};

export default LayoutMember;
