exports.sendTokenSevice = async (resp, statuscode, user, message) => {
  try {
    const token = user.getJWTToken();
    const options = {
      httpOnly: true,
      path: "/",
      expires: new Date(
        Date.now() + process.env.JWT_EXPIRE_COOKIE * 24 * 60 * 60 * 1000
      ),
    };
    const { password, ...otherdetails } = user._doc;
    resp
      .status(statuscode)
      .cookie("token", token, options) //not usefull in this site
      .json({
        success: true,
        message: message,
        user: otherdetails,
        token: token,
      });
  } catch (error) {
    resp.status(500).json({ success: false, message: error.message });
  }
};
