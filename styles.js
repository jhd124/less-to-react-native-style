const styles = {
  contentWrapper: {
    position: 'absolute',
    width: size(100),
    alignItems: 'center',
    marginTop: size(200)
  },
  appointmentCard: {
    left: 0,
    right: 0
  },
  buttonsContainer: {
    width: size(100),
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: size(80),
    paddingRight: size(80),
    marginTop: size(70)
  },
  button: {
    flex: 1,
    alignItems: 'center',
    color: '#666666',
    fontSize: size(28)
  },
  iconContainer: {
    width: size(80),
    height: size(80),
    borderRadius: size(50),
    backgroundColor: 'white',
    boxShadow: '0 2rpx 4rpx rgba(0, 0, 0, 0.1)',
    marginBottom: size(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonIcon: {
    width: size(38),
    height: size(38)
  },
  mutationBtn: {
    width: size(80),
    height: size(80)
  },
  backToHome: {
    position: 'absolute',
    bottom: -110,
    width: size(100),
    color: '#999999',
    fontSize: size(30),
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  tip: {
    whiteSpace: 'nowrap',
    color: 'white',
    fontSize: size(26),
    paddingTop: size(15),
    paddingBottom: size(15),
    paddingLeft: size(26),
    paddingRight: size(26),
    borderRadius: size(10),
    marginBottom: size(22),
    backgroundColor: '#3B99FC'
  },
  foot: {
    position: 'absolute',
    bottom: -8,
    left: 0,
    right: 0,
    width: size(20),
    height: size(20),
    backgroundColor: '#3B99FC',
    transform: 'rotate(45deg)'
  }
};
